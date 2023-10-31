import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59049Page } from './s59049.page';

describe('S59049Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59049Page;
  let fixture: ComponentFixture<S59049Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59049Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59049Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
