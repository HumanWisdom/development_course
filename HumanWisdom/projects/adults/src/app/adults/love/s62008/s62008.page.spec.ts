import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62008Page } from './s62008.page';

describe('S62008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62008Page;
  let fixture: ComponentFixture<S62008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
