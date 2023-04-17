import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S101001Page } from './s101001.page';

describe('S10100Page', () => {
      
    let component:  S101001Page;
  let fixture: ComponentFixture<S101001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S101001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S101001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
