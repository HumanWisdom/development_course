import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116043Page } from './s116043.page';

describe('S116043Page', () => {
      
    let component:  S116043Page;
  let fixture: ComponentFixture<S116043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
