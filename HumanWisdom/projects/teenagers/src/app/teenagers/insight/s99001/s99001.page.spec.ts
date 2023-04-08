import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S99001Page } from './s99001.page';

describe('S99001Page', () => {
      
    let component:  S99001Page;
  let fixture: ComponentFixture<S99001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S99001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S99001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
