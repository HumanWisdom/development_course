import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62124Page } from './s62124.page';

describe('S62124Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62124Page;
  let fixture: ComponentFixture<S62124Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62124Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62124Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
