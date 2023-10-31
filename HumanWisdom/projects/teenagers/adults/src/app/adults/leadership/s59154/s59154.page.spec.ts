import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59154Page } from './s59154.page';

describe('S59154Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59154Page;
  let fixture: ComponentFixture<S59154Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59154Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59154Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
