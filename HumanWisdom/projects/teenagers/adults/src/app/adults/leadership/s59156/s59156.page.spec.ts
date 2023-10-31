import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59156Page } from './s59156.page';

describe('S59156Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59156Page;
  let fixture: ComponentFixture<S59156Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59156Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59156Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
