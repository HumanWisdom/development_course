import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62144Page } from './s62144.page';

describe('S62144Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62144Page;
  let fixture: ComponentFixture<S62144Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62144Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62144Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
