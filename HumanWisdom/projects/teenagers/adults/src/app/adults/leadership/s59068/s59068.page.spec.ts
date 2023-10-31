import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59068Page } from './s59068.page';

describe('S59068Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59068Page;
  let fixture: ComponentFixture<S59068Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59068Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59068Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
