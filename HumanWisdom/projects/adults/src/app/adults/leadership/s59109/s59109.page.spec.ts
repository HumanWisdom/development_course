import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59109Page } from './s59109.page';

describe('S59109Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59109Page;
  let fixture: ComponentFixture<S59109Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59109Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59109Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
