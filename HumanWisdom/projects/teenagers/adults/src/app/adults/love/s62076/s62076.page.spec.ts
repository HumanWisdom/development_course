import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62076Page } from './s62076.page';

describe('S62076Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62076Page;
  let fixture: ComponentFixture<S62076Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62076Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62076Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
