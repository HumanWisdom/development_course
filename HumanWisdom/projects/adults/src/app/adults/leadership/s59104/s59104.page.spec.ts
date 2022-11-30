import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59104Page } from './s59104.page';

describe('S59104Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59104Page;
  let fixture: ComponentFixture<S59104Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59104Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59104Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
