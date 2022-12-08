import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59138Page } from './s59138.page';

describe('S59138Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59138Page;
  let fixture: ComponentFixture<S59138Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59138Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59138Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
