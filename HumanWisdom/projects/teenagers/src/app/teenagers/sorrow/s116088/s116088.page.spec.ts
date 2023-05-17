import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116088Page } from './s116088.page';

describe('S116088Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116088Page;
  let fixture: ComponentFixture<S116088Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116088Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116088Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
