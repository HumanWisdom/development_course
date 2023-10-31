import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59012Page } from './s59012.page';

describe('S59012Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59012Page;
  let fixture: ComponentFixture<S59012Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59012Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59012Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
