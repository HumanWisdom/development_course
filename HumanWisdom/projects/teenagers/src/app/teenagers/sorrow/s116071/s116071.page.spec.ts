import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116071Page } from './s116071.page';

describe('S116071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116071Page;
  let fixture: ComponentFixture<S116071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
