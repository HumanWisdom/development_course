import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110007Page } from './s110007.page';

describe('S110007Page', () => {
  // let  
    let component:  S110007Page;
  let fixture: ComponentFixture<S110007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
