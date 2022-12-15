import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59121Page } from './s59121.page';

describe('S59121Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59121Page;
  let fixture: ComponentFixture<S59121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59121Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
