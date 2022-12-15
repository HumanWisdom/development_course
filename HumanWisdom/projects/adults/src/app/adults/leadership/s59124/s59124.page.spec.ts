import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59124Page } from './s59124.page';

describe('S59124Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59124Page;
  let fixture: ComponentFixture<S59124Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59124Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59124Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
