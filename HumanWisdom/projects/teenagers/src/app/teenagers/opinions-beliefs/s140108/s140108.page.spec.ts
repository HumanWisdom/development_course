import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140108Page } from './s140108.page';

describe('S140108Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140108Page;
  let fixture: ComponentFixture<S140108Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140108Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140108Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
