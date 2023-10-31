import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59141Page } from './s59141.page';

describe('S59141Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59141Page;
  let fixture: ComponentFixture<S59141Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59141Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59141Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
