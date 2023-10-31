import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59060Page } from './s59060.page';

describe('S59060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59060Page;
  let fixture: ComponentFixture<S59060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
