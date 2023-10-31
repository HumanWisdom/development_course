import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59032Page } from './s59032.page';

describe('S59032Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59032Page;
  let fixture: ComponentFixture<S59032Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59032Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59032Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
