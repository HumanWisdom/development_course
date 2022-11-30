import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62121Page } from './s62121.page';

describe('S62121Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62121Page;
  let fixture: ComponentFixture<S62121Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62121Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62121Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
