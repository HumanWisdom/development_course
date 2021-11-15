import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59018Page } from './s59018.page';

describe('S59018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59018Page;
  let fixture: ComponentFixture<S59018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
