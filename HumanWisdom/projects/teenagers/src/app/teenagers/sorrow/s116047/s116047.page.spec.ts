import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116047Page } from './s116047.page';

describe('S116047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116047Page;
  let fixture: ComponentFixture<S116047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
