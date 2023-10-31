import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62010Page } from './s62010.page';

describe('S62010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62010Page;
  let fixture: ComponentFixture<S62010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
