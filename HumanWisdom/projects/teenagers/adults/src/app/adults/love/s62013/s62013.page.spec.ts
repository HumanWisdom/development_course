import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62013Page } from './s62013.page';

describe('S62013Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62013Page;
  let fixture: ComponentFixture<S62013Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62013Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62013Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
