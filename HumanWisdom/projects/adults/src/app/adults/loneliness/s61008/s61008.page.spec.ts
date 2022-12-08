import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61008Page } from './s61008.page';

describe('S61008Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61008Page;
  let fixture: ComponentFixture<S61008Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61008Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61008Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
