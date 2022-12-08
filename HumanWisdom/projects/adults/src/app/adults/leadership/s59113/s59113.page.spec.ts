import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59113Page } from './s59113.page';

describe('S59113Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59113Page;
  let fixture: ComponentFixture<S59113Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59113Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59113Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
