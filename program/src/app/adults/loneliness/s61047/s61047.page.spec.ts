import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61047Page } from './s61047.page';

describe('S61047Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61047Page;
  let fixture: ComponentFixture<S61047Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61047Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61047Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
